package routes

import (
	"net/http"
	"todo/models"

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