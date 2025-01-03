package models

import (
	"todo/db"

	"github.com/labstack/echo/v4"
)

func GetAllTasks() ([]db.Task, error) {
	tasks := []db.Task{}
	if db.DB.Find(&tasks).Error !=nil {
		return nil, echo.ErrNotFound
	}

	return tasks, nil
}

func GetTaskById(id string) (*db.Task, error) {
	task := db.Task{}
	if db.DB.Where("id = ?", id).First(&task).Error != nil {
		return nil, echo.ErrNotFound
	}

	return &task, nil
}

func CreateTask(task db.Task) error {
	if db.DB.Create(&task).Error != nil {
		return echo.ErrInternalServerError
	}

	return nil
}

func UpdateTask(task db.Task) error {
	if db.DB.Save(&task).Error != nil {
		return echo.ErrInternalServerError
	}

	return nil
}

func DeleteTask(id string) error {
	if db.DB.Delete(&db.Task{}, "id = ?", id).Error != nil {
		return echo.ErrInternalServerError
	}

	return nil
}