variable "aws_account_id" {
  description = "AWS Account ID"
  type        = string
}

variable "region" {
  description = "AWS Region"
  type        = string
}

variable "vpc_cidr_block" {
  description = "VPC CIDR Block"
  type        = string
}

variable "public_subnet_cidr_block_1a" {
  description = "Public Subnet CIDR Block for Availability Zone 1a"
  type        = string
}

variable "public_subnet_cidr_block_1c" {
  description = "Public Subnet CIDR Block for Availability Zone 1c"
  type        = string
}

variable "private_subnet_cidr_block_1a" {
  description = "Private Subnet CIDR Block for Availability Zone 1c"
  type        = string
}

variable "private_subnet_cidr_block_1c" {
  description = "Private Subnet CIDR Block for Availability Zone 1c"
  type        = string
}

variable "rds_username" {
  description = "RDS Username"
  type        = string
}

variable "rds_password" {
  description = "RDS Password"
  type        = string
}

variable "rds_db_name" {
  description = "RDS Database Name"
  type        = string
}

variable "rds_instance_class" {
  description = "RDS Instance Class"
  type        = string
}

variable "rds_engine" {
  description = "RDS Engine"
  type        = string
}

variable "rds_engine_version" {
  description = "RDS Engine Version"
  type        = string
}