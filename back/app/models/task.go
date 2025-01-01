package models

import (
	"todo/db"
	"time"

	"github.com/labstack/echo/v4"
)

type Task struct {
	ID        string      `json:"id" mysql:"id"`
	Name      string    `json:"name" mysql:"name"`
	IsDone    bool      `json:"is_done" mysql:"is_done"`
	UpdateAt  time.Time `json:"update_at" mysql:"update_at"`
	CreatedAt time.Time `json:"created_at" mysql:"created_at"`
}

func GetAllTasks() ([]Task, error) {
	tasks := []Task{}
	if db.DB.Find(&tasks).Error !=nil {
		return nil, echo.ErrNotFound
	}

	return tasks, nil
}

func GetTaskById(id string) (*Task, error) {
	task := Task{}
	if db.DB.Where("id = ?", id).First(&task).Error != nil {
		return nil, echo.ErrNotFound
	}

	return &task, nil
}

func CreateTask(task Task) error {
	if db.DB.Create(&task).Error != nil {
		return echo.ErrInternalServerError
	}

	return nil
}