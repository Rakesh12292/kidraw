import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-employee-modal',
  templateUrl: './add-employee-modal.component.html',
  styleUrls: ['./add-employee-modal.component.scss'],
})
export class AddEmployeeModalComponent {
  @Input() selectedEmployee: any; // 👈 Receive selectedEmployee from parent

  employeeData = [
    { id: 101, name: "Alice", age: 28, position: "Developer", department: "IT" },
    { id: 102, name: "Bob", age: 34, position: "Designer", department: "UI/UX" },
    { id: 103, name: "Tony", age: 34, position: "Testing", department: "IT" },
  ];

  constructor(private modalCtrl: ModalController) {}

  selectEmployee(emp : any) {
    this.selectedEmployee = emp;
  }

  goToEnroll() {
    this.modalCtrl.dismiss(this.selectedEmployee);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
