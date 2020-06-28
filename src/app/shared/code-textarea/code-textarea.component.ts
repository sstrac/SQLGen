import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'code-textarea',
  templateUrl: 'code-textarea.component.html',
  styleUrls: ['./code-textarea.component.scss']
})
export class CodeTextareaComponent implements OnInit{
  @Input() content: string[] | string
  @Input() codeStyle: string

  ngOnInit(){
    this.codeStyle = this.codeStyle.toLowerCase()
  }

  ngOnChanges(){
    if(typeof(this.content) == "string"){
      this.content = this.content.split(" ")
    }
  }

  applyCodestyle(word: string){
    switch(this.codeStyle){
      case 'sql': 
        return this.sqlCodeStyle(word)
      default:
    }
  }

  sqlCodeStyle(word: string){
    word = word.toUpperCase()
    if(sqlImportantKeywords.includes(word)){
      return { 'keyword': true, 'important': true}
    }
    else if (sqlKeywords.includes(word)){
      return { 'keyword': true }
    }
    else if (sqlJoiners.includes(word)){
      return { 'operand': true }
    }
    else if (sqlContainers.includes(word)){
      return { 'container': true }
    }
    else{
      return { 'base': true }
    }
  }
}

const sqlImportantKeywords = [ "SELECT", "WHERE", "FROM", "AND", "IN" ]
const sqlKeywords = ["TRIM"]
const sqlJoiners = ["=", "|", "*", ","]
const sqlContainers = ["(", ")"]