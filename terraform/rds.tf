resource "aws_db_instance" "db" {
  allocated_storage      = 10
  storage_type           = "gp2"
  engine                 = var.rds_engine
  engine_version         = var.rds_engine_version
  instance_class         = var.rds_instance_class
  identifier             = var.rds_db_name
  username               = var.rds_username
  password               = var.rds_password
  vpc_security_group_ids = [aws_security_group.rds_sg.id]
  db_subnet_group_name   = aws_db_subnet_group.rds.name
  skip_final_snapshot = true
  tags = {
    Name = "todo-db"
  }
}