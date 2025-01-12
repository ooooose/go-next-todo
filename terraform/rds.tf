resource "aws_db_instance" "db" {
  allocated_storage      = 20
  storage_type           = "gp2"
  engine                 = "mysql"
  engine_version         = "8.2"
  instance_class         = "db.t2.micro"
  username               = var.rds_username
  password               = var.rds_password
  parameter_group_name   = "default.mysql8.2"
  vpc_security_group_ids = [aws_security_group.rds_sg.id]
  db_subnet_group_name   = aws_db_subnet_group.rds.name
  tags = {
    Name = "todo-db"
  }
}