package db

import (
	"fmt"
	"os"

	"time"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

type Task struct {
	ID        string      `json:"id" mysql:"id"`
	Name      string    `json:"name" mysql:"name"`
	IsDone    bool      `json:"is_done" mysql:"is_done"`
	UpdateAt  time.Time `json:"update_at" mysql:"update_at"`
	CreatedAt time.Time `json:"created_at" mysql:"created_at"`
}

func Init() {
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")

	dsb := fmt.Sprintf(
		"%s:%s@tcp(db)/%s?charset=utf8mb4&parseTime=true&loc=Local",
		dbUser,
		dbPassword,
		dbName,
	)

	var err error
	DB, err = gorm.Open(mysql.Open(dsb), &gorm.Config{})

	if err != nil {
		panic("Could not connect to the database")
	}

	DB.AutoMigrate(&Task{})
}
