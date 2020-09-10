import { Component } from '@angular/core';
import { DataService } from './data.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @BlockUI() blockUI: NgBlockUI;

  title = 'Card View Demo';
  
  constructor(private api: DataService) { }
  SpacexData;
  SpaceX1Data;
  filteredSpacexData;
  togglebuttons = false;
  togglelaunch = false;
  toggleland = false;
  buttons;
  launch;
  land;
  selectedyear: any;
  selectedlaunch: any;
  selectedland: any;
  ngOnInit() {
    
    this.fetchSpaceX();
    
  }

  fetchSpaceX(){
    this.blockUI.start('Loading...');
    this.api.getspaceX().subscribe((data:any)=>{
      // console.log(data);
      this.SpacexData = data;

      this.SpaceX1Data = this.SpacexData ;
      this.blockUI.stop();
      
    },
     error => {
      console.log(error);
      this.blockUI.stop();
    }); 
    
    
  }
  
  onClickYears(event, num){
    this.togglebuttons = !this.togglebuttons;
    // this.selectedyear = num;
    // this.buttons = event.target.innerText;
    
    if(this.togglebuttons || this.buttons != event.target.innerText){
      this.buttons = event.target.innerText;
      this.selectedyear = num;

      if(this.buttons && this.launch && this.land){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'launch_success=' + this.launch + '&' + 'land_success=' + this.land + '&' + 'launch_year=' + event.target.innerText);
        this.filteredSpacexData = this.SpacexData.filter(spacexyear => spacexyear.launch_year === event.target.innerText.toLowerCase());
        this.filteredSpacexData = this.filteredSpacexData.filter(launch => String(launch.launch_success) === this.launch);      
        this.filteredSpacexData = this.filteredSpacexData.filter(land => String(land.rocket.first_stage.cores[0].land_success) === this.land);                     
        this.SpacexData = this.filteredSpacexData;
      }
      else if(this.buttons && this.launch){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'launch_success=' + this.launch + '&' + 'launch_year=' + event.target.innerText);
        this.filteredSpacexData = this.SpacexData.filter(spacexyear => spacexyear.launch_year === event.target.innerText.toLowerCase());
        this.filteredSpacexData = this.filteredSpacexData.filter(launch => String(launch.launch_success) === this.launch); 
        this.SpacexData = this.filteredSpacexData;
  
      }
      else if(this.buttons && this.land){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'land_success=' + this.land + '&' + 'launch_year=' + event.target.innerText);
        this.filteredSpacexData = this.SpacexData.filter(spacexyear => spacexyear.launch_year === event.target.innerText.toLowerCase());
        this.filteredSpacexData = this.filteredSpacexData.filter(land => String(land.rocket.first_stage.cores[0].land_success) === this.land);
        this.SpacexData = this.filteredSpacexData;
  
      }
      else if(this.buttons){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'launch_year=' + event.target.innerText);
        this.filteredSpacexData = this.SpacexData.filter(spacexyear => spacexyear.launch_year === event.target.innerText.toLowerCase());
        this.SpacexData = this.filteredSpacexData;
  
      }
      
    }
    else if(!this.togglebuttons || this.buttons == event.target.innerText){
      this.buttons = '';
      this.selectedyear = null;

      if(this.launch && this.land){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'launch_success=' + '&' + this.launch + 'land_success=' + this.land);
        this.filteredSpacexData = this.SpacexData.filter(launch => String(launch.launch_success) === this.launch);      
        this.filteredSpacexData = this.filteredSpacexData.filter(land => String(land.rocket.first_stage.cores[0].land_success) === this.land);   
        this.SpacexData = this.filteredSpacexData;
  
      }
      else if(this.launch){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'launch_success=' + this.launch );
        this.filteredSpacexData = this.SpacexData.filter(launch => String(launch.launch_success) === this.launch);
        this.SpacexData = this.filteredSpacexData;
  
      }
      else if(this.land){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'land_success=' + this.land );
        this.filteredSpacexData = this.SpacexData.filter(land => String(land.rocket.first_stage.cores[0].land_success) === this.land);
        this.SpacexData = this.filteredSpacexData;
  
      }
      else{
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, '');
      }
    }

    
  }

  isActive(item) {
    return this.selectedyear === item;
  };
  isActive1(item) {
    return this.selectedlaunch === item;
  };
  isActive2(item) {
    return this.selectedland === item;
  };



  onClickSuccessfulLaunch(event, bool){
    
    this.togglelaunch = !this.togglelaunch;
    if(this.togglelaunch || this.launch != event.target.innerText.toLowerCase()){
      this.launch = event.target.innerText.toLowerCase();
      this.selectedlaunch = bool;
      
      if(this.launch && this.buttons && this.land){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'launch_success=' + this.launch + '&' + 'land_success=' + this.land + '&' + 'launch_year=' + this.buttons);
        this.filteredSpacexData = this.SpacexData.filter(launch => String(launch.launch_success) === this.launch);
        this.filteredSpacexData = this.filteredSpacexData.filter(spacexyear => spacexyear.launch_year === this.buttons);      
        this.filteredSpacexData = this.filteredSpacexData.filter(land => String(land.rocket.first_stage.cores[0].land_success) === this.land);                     
        this.SpacexData = this.filteredSpacexData;

      }
      else if(this.launch && this.buttons){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'launch_success=' + this.launch + '&' + 'launch_year=' + this.buttons);
        this.filteredSpacexData = this.SpacexData.filter(launch => String(launch.launch_success) === this.launch);
        this.filteredSpacexData = this.filteredSpacexData.filter(spacexyear => spacexyear.launch_year === this.buttons);
        this.SpacexData = this.filteredSpacexData;
      }
      else if(this.launch && this.land){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'launch_success=' + this.launch  + '&' + 'land_success=' + this.land );
        this.filteredSpacexData = this.SpacexData.filter(launch => String(launch.launch_success) === this.launch); 
        this.filteredSpacexData = this.filteredSpacexData.filter(land => String(land.rocket.first_stage.cores[0].land_success) === this.land); 
        this.SpacexData = this.filteredSpacexData;
      }
      else if(this.launch){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'launch_success=' + this.launch);
        this.filteredSpacexData = this.SpacexData.filter(launch => String(launch.launch_success) === this.launch); 
        this.SpacexData = this.filteredSpacexData;
      }
    }
    else if(!this.togglelaunch || this.launch == event.target.innerText.toLowerCase()){
      this.launch = '';
      this.selectedlaunch = null;

      if(this.buttons && this.land){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null,  'land_success=' + this.land + '&' + 'launch_year=' + this.buttons);
        this.filteredSpacexData = this.SpacexData.filter(spacexyear => spacexyear.launch_year === this.buttons);      
        this.filteredSpacexData = this.filteredSpacexData.filter(land => String(land.rocket.first_stage.cores[0].land_success) === this.land);   
        this.SpacexData = this.filteredSpacexData;
  
      }
      else if(this.buttons){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, this.land + 'launch_year=' + this.buttons);
        this.filteredSpacexData = this.SpacexData.filter(spacexyear => spacexyear.launch_year === this.buttons);
        this.SpacexData = this.filteredSpacexData;
  
      }
      else if(this.land){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'land_success=' + this.land );
        this.filteredSpacexData = this.SpacexData.filter(land => String(land.rocket.first_stage.cores[0].land_success) === this.land);
        this.SpacexData = this.filteredSpacexData;
  
      }
      else{
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, '');
      }
    }
  
  }




  onClickSuccessfulLaunchAndLand(event,bool){
    this.toggleland = !this.toggleland;

    if(this.toggleland || this.land != event.target.innerText.toLowerCase()){
      this.land = event.target.innerText.toLowerCase();
      this.selectedland = bool;

      if(this.land && this.buttons && this.launch){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'launch_success=' + this.launch + '&' + 'land_success=' + this.land + '&' + 'launch_year=' + this.buttons);
        this.filteredSpacexData = this.SpacexData.filter(land => String(land.rocket.first_stage.cores[0].land_success) === this.land);
        this.filteredSpacexData = this.filteredSpacexData.filter(spacexyear => spacexyear.launch_year === this.buttons);      
        this.filteredSpacexData = this.filteredSpacexData.filter(launch => String(launch.launch_success) === this.launch);                     
        this.SpacexData = this.filteredSpacexData;

      }
      else if(this.land && this.buttons){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'land_success=' + this.land + '&' + 'launch_year=' + this.buttons);
        this.filteredSpacexData = this.SpacexData.filter(land => String(land.rocket.first_stage.cores[0].land_success) === this.land); 
        this.filteredSpacexData = this.filteredSpacexData.filter(spacexyear => spacexyear.launch_year === this.buttons);
        this.SpacexData = this.filteredSpacexData;
      }
      else if(this.land && this.launch){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'launch_success=' + this.launch  + '&' + 'land_success=' + this.land );
        this.filteredSpacexData = this.SpacexData.filter(land => String(land.rocket.first_stage.cores[0].land_success) === this.land); 
        this.filteredSpacexData = this.filteredSpacexData.filter(launch => String(launch.launch_success) === this.launch); 
        this.SpacexData = this.filteredSpacexData;
      }
      else if(this.land){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'land_success=' + this.land);
        this.filteredSpacexData = this.SpacexData.filter(land => String(land.rocket.first_stage.cores[0].land_success) === this.land); 
        this.SpacexData = this.filteredSpacexData;
      }
    }
    else if(!this.toggleland  || this.land == event.target.innerText.toLowerCase()){
      this.land = '';
      this.selectedland = null;
      if(this.buttons && this.launch){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null,  'launch_success=' + this.launch + '&' + 'launch_year=' + this.buttons);
        this.filteredSpacexData = this.SpacexData.filter(spacexyear => spacexyear.launch_year === this.buttons);      
        this.filteredSpacexData = this.filteredSpacexData.filter(launch => String(launch.launch_success) === this.launch); 
        this.SpacexData = this.filteredSpacexData;
  
      }
      else if(this.buttons){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, this.land + 'launch_year=' + this.buttons);
        this.filteredSpacexData = this.SpacexData.filter(spacexyear => spacexyear.launch_year === this.buttons); 
        this.SpacexData = this.filteredSpacexData;
  
      }
      else if(this.launch){
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, 'lunch_success=' + this.launch );
        this.filteredSpacexData = this.SpacexData.filter(launch => String(launch.launch_success) === this.launch); 
        this.SpacexData = this.filteredSpacexData;
  
      }
      else{
        this.SpacexData = this.SpaceX1Data ;
        window.history.replaceState(null, null, '');
      }
    }
  
    }
  
  }
