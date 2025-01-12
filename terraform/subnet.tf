locals {
  az_1a = "ap-northeast-1a"
  az_1c = "ap-northeast-1c"
}

resource "aws_subnet" "public_subnet_1a" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = var.public_subnet_cidr_block_1a
  availability_zone       = local.az_1a
  map_public_ip_on_launch = true

  tags = {
    Name = "public_subnet_1a"
  }
}

resource "aws_subnet" "public_subnet_1c" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = var.public_subnet_cidr_block_1c
  availability_zone       = local.az_1c
  map_public_ip_on_launch = true

  tags = {
    Name = "public_subnet_1c"
  }
}

resource "aws_subnet" "private_subnet_1c" {
  vpc_id                  = aws_vpc.vpc.id
  cidr_block              = var.private_subnet_cidr_block_1c
  availability_zone       = local.az_1c
  map_public_ip_on_launch = false

  tags = {
    Name = "private_subnet_1c"
  }
}