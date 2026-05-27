import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard-super-admin',
  templateUrl: './dashboard-super-admin.component.html',
  styleUrls: ['./dashboard-super-admin.component.css']
})
export class DashboardSuperAdminComponent {


  users: any[] = [];
  userToEdit: any = null;
  isEditMode = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  startNewUser() {
    this.isEditMode = false;
    this.userToEdit = { nom: '', prenom: '', email: '', password: '', role: '' };
  }

  editUser(user: any) {
    this.isEditMode = true;
    this.userToEdit = { ...user };
  }

  saveUser() {
    if (this.isEditMode) {
      this.userService.updateUser(this.userToEdit.id, this.userToEdit).subscribe(() => {
        this.loadUsers();
        this.userToEdit = null;
      });
    } else {
      this.userService.addUser(this.userToEdit).subscribe(() => {
        this.loadUsers();
        this.userToEdit = null;
      });
    }
  }

  deleteUser(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.userService.deleteUser(id).subscribe(() => {
        this.loadUsers();
      });
    }
  }

  cancelEdit() {
    this.userToEdit = null;
  }

}
