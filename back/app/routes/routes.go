package routes

import (
	"github.com/labstack/echo/v4"
)

func RegisterRoutes(server *echo.Echo) {
	server.GET("/tasks", GetAllTasks)
	server.GET("/tasks/:id", GetTaskById)
	server.POST("/tasks", CreateTask)
}