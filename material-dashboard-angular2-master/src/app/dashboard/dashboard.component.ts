import { Component, OnInit } from '@angular/core';
import {UadService} from '../uad.service'
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service: UadService) { }
  mat_keys
  cat_keys = {}
  token
  material
  cat
  pk_user
  response

  ngOnInit() {
    localStorage.clear()
    this.cat_keys =  {}

    this.service.login("Erick", "Coronado99").subscribe(data => {
      this.token = data

      this.service.getUser(this.token['token'], "JaunCoro").subscribe(data => {
        this.pk_user = data["pk"]
        console.log(this.pk_user)
      })

      this.service.getMaterial(this.token['token']).subscribe(data => {
        this.material = data
        console.log(this.material)
        this.mat_keys = Object.keys(this.material)
        console.log(this.mat_keys)

        this.service.updateMaterial(this.token['token'], this.material[0].pk, this.material[0].name, 
        this.material[0].categotia, true).subscribe(data =>{
          console.log(data)
        })

        this.service.getCategories(this.token['token']).subscribe(data =>{
          this.cat = data
          console.log(this.cat)

          for(let i = 0; i < this.cat.length; i++){
            this.cat_keys[this.cat[i].pk] = this.cat[i].name
          }
        })
      })
    })
  }

  request(token, pk_user, key){
    //console.log(token + " " + pk_user, + " " + key)
    const uso = "IN"
    this.service.createRequest(token, pk_user, this.material[key].pk, uso).subscribe(data => {
      this.response = data
      console.log(this.response)

      this.service.updateMaterial(token, this.material[key].pk , this.material[key].name, this.material[key].categotia, 
        false).subscribe(data =>{
          console.log(data)
        })
    })
  }
}
