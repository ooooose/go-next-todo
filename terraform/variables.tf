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

variable "private_subnet_cidr_block_1c" {
  description = "Private Subnet CIDR Block for Availability Zone 1c"
  type        = string
}