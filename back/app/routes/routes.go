package routes

import (
	"github.com/labstack/echo/v4"
)

func RegisterRoutes(server *echo.Echo) {
	server.GET("/health", HealthCheck)
	server.GET("/tasks", GetAllTasks)
	server.GET("/tasks/:id", GetTaskById)
	server.POST("/tasks", CreateTask)
	server.PUT("/tasks", UpdateTask)
	server.DELETE("/tasks/:id", DeleteTask)
}