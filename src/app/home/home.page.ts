import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonIcon, 
  IonItem, 
  IonLabel, 
  IonSelect, 
  IonSelectOption, 
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonChip,
  IonBadge
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  medicalOutline, 
  peopleOutline, 
  banOutline, 
  radioOutline, 
  femaleOutline, 
  eyeOutline,
  ellipsisHorizontal,
  locationOutline,
  addOutline,
  informationCircleOutline,
  cardOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage  {
 selectedSpecialty = 'All';
  selectedPCPType = 'All';
  selectedMiles = '10';
  searchQuery = '';

  doctors = [
    {
      name: 'Brieloff, Peter Neil',
      specialty: 'Family Medicine',
      specialInterest: 'Podiatry',
      address: '846440 Benedict Drive Sterling VA, LOUDOUN, 20164',
      distance: '1.03 miles Away',
      insurance: 'COX, SAMUEL, OD',
      isPCP: true
    },
    {
      name: 'Brieloff, Peter Neil',
      specialty: 'Family Medicine',
      specialInterest: 'Podiatry',
      address: '846440 Benedict Drive Sterling VA, LOUDOUN, 20164',
      distance: '1.03 miles Away',
      insurance: 'COX, SAMUEL, OD',
      isPCP: true
    }
  ];

  constructor() {
    addIcons({
      medicalOutline,
      peopleOutline,
      banOutline,
      radioOutline,
      femaleOutline,
      eyeOutline,
      ellipsisHorizontal,
      locationOutline,
      addOutline,
      informationCircleOutline,
      cardOutline
    });
  }

  onSpecialtyChange(event: any) {
    this.selectedSpecialty = event.detail.value;
  }

  onPCPTypeChange(event: any) {
    this.selectedPCPType = event.detail.value;
  }

  onMilesChange(event: any) {
    this.selectedMiles = event.detail.value;
  }

  onSearchChange(event: any) {
    this.searchQuery = event.detail.value;
  }

  selectDoctor(doctor: any) {
    console.log('Selected doctor:', doctor);
  }

}
