package routes

import (
	"net/http"
	"todo/models"
	"todo/db"

	"github.com/labstack/echo/v4"
)

func GetAllTasks(context echo.Context) error {
	tasks, err := models.GetAllTasks()
	if err != nil {
		return context.JSON(http.StatusInternalServerError, "タスクを取得できませんでした。")
	}

	return context.JSON(http.StatusOK, tasks)
}

func GetTaskById(context echo.Context) error {
	id := context.Param("id")
	task, err := models.GetTaskById(id)

	if err != nil {
		return context.JSON(http.StatusInternalServerError, "タスクを取得できませんでした。")
	}
	return context.JSON(http.StatusOK, task)
}

func CreateTask(context echo.Context) error {
	task := db.Task{}
	if err := context.Bind(&task); err != nil {
		return context.JSON(http.StatusInternalServerError, "タスクを作成できませんでした。")
	}

	if err := models.CreateTask(task); err != nil {
		return context.JSON(http.StatusInternalServerError, "タスクを作成できませんでした。")
	}

	return context.JSON(http.StatusCreated, task)
}

func UpdateTask(context echo.Context) error {
	task := db.Task{}
	if err := context.Bind(&task); err != nil {
		return context.JSON(http.StatusInternalServerError, "タスクを更新できませんでした。")
	}

	if err := models.UpdateTask(task); err != nil {
		return context.JSON(http.StatusInternalServerError, "タスクを更新できませませんでした。")
	}

	return context.JSON(http.StatusOK, task)
}

func DeleteTask(context echo.Context) error {
	id := context.Param("id")
	if err := models.DeleteTask(id); err != nil {
		return context.JSON(http.StatusInternalServerError, "タスクを削除できませんでした。")
	}

	return context.NoContent(http.StatusNoContent)
}