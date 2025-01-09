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

variable "subnet_cidr_block_1a" {
  description = "Subnet CIDR Block for Availability Zone 1a"
  type        = string
}

variable "subnet_cidr_block_1c" {
  description = "Subnet CIDR Block for Availability Zone 1c"
  type        = string
}