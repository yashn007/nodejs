import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './services/users.service';
import { UsersApi } from './api/users.api';

const API = [UsersApi];

const SERVICES = [
  UsersService
];

@NgModule({
  imports: [CommonModule],
})
export class CommonBackendModule {}
