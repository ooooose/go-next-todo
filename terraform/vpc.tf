resource "aws_vpc" "vpc" {
  cidr_block = var.vpc_cidr_block

  enable_dns_support = true
  enable_dns_hostnames = true
  tags = {
    Name = "${var.environment}-vpc"
  }
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.vpc.id
  tags = {
    Name = "${var.environment}-igw"
  }
}

resource "aws_vpc_endpoint" "ecr_api"  {
  vpc_id = aws_vpc.vpc.id
  service_name = "com.amazonaws.${local.region}.ecr.api"
  vpc_endpoint_type = "Interface"
  private_dns_enabled = true
  security_group_ids = [aws_security_group.ecr_vpce_sg.id]
  subnet_ids = [aws_subnet.subnet_1a.id, aws_subnet.subnet_1c.id]

  tags = {
    Name = "${var.environment}-ecr-api-vpce"
  }
}

resource "aws_vpc_endpoint" "ecr_dkr"  {
  vpc_id = aws_vpc.vpc.id
  service_name = "com.amazonaws.${local.region}.ecr.dkr"
  vpc_endpoint_type = "Interface"
  private_dns_enabled = true
  security_group_ids = [aws_security_group.ecr_vpce_sg.id]
  subnet_ids = [aws_subnet.subnet_1a.id, aws_subnet.subnet_1c.id]

  tags = {
    Name = "${var.environment}-ecr-dkr-vpce"
  }
}