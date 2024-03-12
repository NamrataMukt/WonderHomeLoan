import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit
{
    @Input() totalItems:any;
  @Input() currentPage:any;
  @Input() itemPerPage:any;
  @Output() onClick:EventEmitter<number>=new EventEmitter();
  
      totalpages=0;
      pages:number[] = [];

    constructor(){
       
    }

  ngOnInit(): void {
    if(this.totalItems)
    this.totalpages=Math.ceil(this.totalItems/this.itemPerPage)
  this.pages=Array.from({ length:this.totalpages },(_, i) => i + 1 )

  }
  
  pageClicked(page:number)
  {
    if(page>this.totalpages) return;
    this.onClick.emit(page);
  }

}
