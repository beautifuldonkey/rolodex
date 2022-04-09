import { Component, OnInit } from '@angular/core';
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface ContactNode {
  name: string;
  children?: ContactNode[];
}

const CONTACT_DATA: ContactNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {
    this.dataSource.data = CONTACT_DATA;
  }

  ngOnInit(): void {
  }

  treeControl = new NestedTreeControl<ContactNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ContactNode>();

  hasChild = (_: number, node: ContactNode) => !!node.children && node.children.length > 0;

}
