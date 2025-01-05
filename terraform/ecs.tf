locals {
  cluster_name = "todo-cluster"
  service_name = "todo-service"
  region = "ap-northeast-1"
  ecr_name = "todo-with-terraform-api"
  ecr_image = "${var.aws_account_id}.dkr.ecr.ap-northeast-1.amazonaws.com/todo-with-terraform-api:latest"
  ecs_task_role = aws_iam_role.ecs_task_execution_role.arn
  ecs_task_cpu = 256
  ecs_task_memory = 512
  ecs_service_desired_count = 2
}

resource "aws_ecs_cluster" "cluster" {
  name = local.cluster_name
}

resource "aws_ecs_cluster_capacity_providers" "cluster_capacity_providers" {
  cluster_name = aws_ecs_cluster.cluster.name
  capacity_providers = ["FARGATE"]
  default_capacity_provider_strategy {
    capacity_provider = "FARGATE"
    base = 2
    weight = 100
  }
}

resource "aws_ecs_task_definition" "task_definition" {
  family = "todo_cluster_task"
  requires_compatibilities = ["FARGATE"]
  cpu = local.ecs_task_cpu
  memory = local.ecs_task_memory
  network_mode = "awsvpc"
  execution_role_arn = local.ecs_task_role
  task_role_arn = local.ecs_task_role
  container_definitions = jsonencode([
    {
      name = local.ecr_name
      image = local.ecr_image
      cpu = local.ecs_task_cpu
      memory = local.ecs_task_memory
      essential = true
      portMappings = [
        {
          containerPort = 5050
          hostPort = 5050
        }
      ]
    }
  ])

  runtime_platform {
    operating_system_family = "LINUX"
    cpu_architecture = "X86_64"
  }
}

resource "aws_ecs_service" "todo_service" {
  name = local.service_name
  cluster = local.cluster_name
  task_definition = aws_ecs_task_definition.task_definition.arn
  desired_count = local.ecs_service_desired_count
  
  load_balancer {
    target_group_arn = aws_lb_target_group.alb_tg.arn
    container_name = local.ecr_name
    container_port = 5050
  }

  network_configuration {
    subnets = [aws_subnet.subnet_1a.id, aws_subnet.subnet_1c.id]
    security_groups = [aws_security_group.ecs_sg.id]
    assign_public_ip = true
  }
}