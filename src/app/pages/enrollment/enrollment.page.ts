import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AddEmployeeModalComponent } from '../../components/add-employee-modal/add-employee-modal.component'

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.page.html',
  styleUrls: ['./enrollment.page.scss'],
})
export class EnrollmentPage {
  enrollmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController
  ) {
    this.enrollmentForm = this.fb.group({
      id: [''],
      name: [''],
      age: [''],
      position: [''],
      department: ['']
    });
  }

  async openAddEmployeeModal() {
  const modal = await this.modalCtrl.create({
    component: AddEmployeeModalComponent,
    componentProps: {
      selectedEmployee: this.enrollmentForm.value // 👈 Pass current form data
    }
  });

  modal.onDidDismiss().then((data) => {
    if (data.data) {
      this.enrollmentForm.patchValue(data.data);
    }
  });

  return await modal.present();
}
}
