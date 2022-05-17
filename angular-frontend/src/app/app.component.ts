import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';
import Positions from './models/positions.model';
import Moves from './models/moves.model';
import { PositionsService } from './services/positions.service';
import { MovesService } from './services/moves.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titleVar = 'Kalah Game';
  startGameVar: boolean = false;
  emptyPlaceVar: boolean = false;
  At: number = 0;
  ast: number = 0;
  Bt: number = 0;
  bst: number = 0;
  Ct: number = 0;
  cst: number = 0;
  Dt: number = 0;
  dst: number = 0;
  Et: number = 0;
  est: number = 0;
  Ft: number = 0;
  fst: number = 0;
  Ll: number = 0;
  lsl: number = 0;
  Ab: number = 0;
  asb: number = 0;
  Bb: number = 0;
  bsb: number = 0;
  Cb: number = 0;
  csb: number = 0;
  Db: number = 0;
  dsb: number = 0;
  Eb: number = 0;
  esb: number = 0;
  Fb: number = 0;
  fsb: number = 0;
  Lr: number = 0;
  lsr: number = 0;
  
  private positions: Positions[];
  private positionsLast: Positions[];
  private moves: Moves[];
  private movesFilter: Moves[];

  constructor(private positionsService: PositionsService,private movesService: MovesService){

  }

  ngOnInit() {
    this.getPositions();
    this.getLastPositions();
    this.getMoves();
  }

  public getPositions(): void{
    this.positionsService.getAllPositions().subscribe(
      (response: Positions[]) => {
        this.positions = response;
        console.log(this.positions);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getLastPositions(): void{
    this.positionsService.getLastPositions().subscribe(
      (response: Positions[]) => {
        this.positionsLast = response;
        console.log(this.positionsLast);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getMoves(): void{
    this.movesService.getAllMoves().subscribe(
      (response: Moves[]) => {
        this.moves = response;
        console.log(this.moves);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getFilterMoves(moves:string,numberPieces:number): void{
    this.movesService.getFilterMove(moves,numberPieces).subscribe(
      (response: Moves[]) => {
        this.movesFilter = response;
        console.log(this.movesFilter);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  bigaClick(){
    if(this.startGameVar == true){
      alert('bigaClick');
      this.ast = this.positionsLast[0].ast?this.positionsLast[0].ast:0;
      this.At = this.positionsLast[0].At?this.positionsLast[0].At:0;
      console.log(this.ast);
      console.log(this.positionsLast);
      if(this.ast != 0){
        this.getFilterMoves('a',this.ast);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one"></div>');
          });
          $('.threePiecesBg-a').css('display','none');
        },100);
      }
      if(this.At != 0){
        this.getFilterMoves('a',this.At);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one bottom"></div>');
          });
          $('.threePiecesBg-a').css('display','none');
        },100);
      }
    }
  }
  bigbClick(){
    if(this.startGameVar == true){
      alert('bigbClick');
      this.bst = this.positionsLast[0].bst?this.positionsLast[0].bst:0;
      this.Bt = this.positionsLast[0].Bt?this.positionsLast[0].Bt:0;
      console.log(this.bst);
      console.log(this.positionsLast);
      if(this.bst != 0){
        this.getFilterMoves('b',this.bst);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one"></div>');
          });
          $('.threePiecesBg-b').css('display','none');
        },100);
      }
      if(this.Bt != 0){
        this.getFilterMoves('b',this.Bt);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one bottom"></div>');
          });
          $('.threePiecesBg-b').css('display','none');
        },100);
      }
    }
  }
  bigcClick(){
    if(this.startGameVar == true){
      alert('bigcClick');
      this.cst = this.positionsLast[0].cst?this.positionsLast[0].cst:0;
      this.Ct = this.positionsLast[0].Ct?this.positionsLast[0].Ct:0;
      console.log(this.cst);
      console.log(this.positionsLast);
      if(this.cst != 0){
        this.getFilterMoves('c',this.cst);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one"></div>');
          });
          $('.threePiecesBg-c').css('display','none');
        },100);
      }
      if(this.Ct != 0){
        this.getFilterMoves('c',this.Ct);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one bottom"></div>');
          });
          $('.threePiecesBg-c').css('display','none');
        },100);
      }
    }
  }
  bigdClick(){
    if(this.startGameVar == true){
      alert('bigdClick');
      this.dst = this.positionsLast[0].dst?this.positionsLast[0].dst:0;
      this.Dt = this.positionsLast[0].Dt?this.positionsLast[0].Dt:0;
      console.log(this.dst);
      console.log(this.positionsLast);
      if(this.dst != 0){
        this.getFilterMoves('d',this.dst);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one"></div>');
          });
          $('.threePiecesBg-d').css('display','none');
        },100);
      }
      if(this.Dt != 0){
        this.getFilterMoves('d',this.Dt);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one bottom"></div>');
          });
          $('.threePiecesBg-d').css('display','none');
        },100);
      }
    }
  }
  bigeClick(){
    if(this.startGameVar == true){
      alert('bigeClick');
      this.est = this.positionsLast[0].est?this.positionsLast[0].est:0;
      this.Et = this.positionsLast[0].Et?this.positionsLast[0].Et:0;
      console.log(this.est);
      console.log(this.positionsLast);
      if(this.est != 0){
        this.getFilterMoves('e',this.est);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one"></div>');
          });
          $('.threePiecesBg-e').css('display','none');
        },100);
      }
      if(this.Et != 0){
        this.getFilterMoves('a',this.At);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one bottom"></div>');
          });
          $('.threePiecesBg-e').css('display','none');
        },100);
      }
    }
  }
  bigfClick(){
    if(this.startGameVar == true){
      alert('bigfClick');
      this.fst = this.positionsLast[0].fst?this.positionsLast[0].fst:0;
      this.Ft = this.positionsLast[0].Ft?this.positionsLast[0].Ft:0;
      console.log(this.fst);
      console.log(this.positionsLast);
      if(this.fst != 0){
        this.getFilterMoves('f',this.fst);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one"></div>');
          });
          $('.threePiecesBg-f').css('display','none');
        },100);
      }
      if(this.Ft != 0){
        this.getFilterMoves('f',this.Ft);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one bottom"></div>');
          });
          $('.threePiecesBg-f').css('display','none');
        },100);
      }
    }
  }

  LlClick(){
    if(this.startGameVar == true){
      alert('LlClick');
      this.lsl = this.positionsLast[0].lsl?this.positionsLast[0].lsl:0;
      this.Ll = this.positionsLast[0].Ll?this.positionsLast[0].Ll:0;
      console.log(this.lsl);
      console.log(this.positionsLast);
      if(this.lsl != 0){
        this.getFilterMoves('ll',this.lsl);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one"></div>');
          });
          $('.threePiecesOg-f.bottom').css('display','none');
        },100);
      }
      if(this.Ll != 0){
        this.getFilterMoves('ll',this.Ll);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one bottom"></div>');
          });
          $('.threePiecesOg-f.bottom').css('display','none');
        },100);
      }
    }
  }

  smallaClick(){
    if(this.startGameVar == true){
      alert('smallaClick');
      this.asb = this.positionsLast[0].asb?this.positionsLast[0].asb:0;
      this.Ab = this.positionsLast[0].Ab?this.positionsLast[0].Ab:0;
      console.log(this.asb);
      console.log(this.positionsLast);
      if(this.asb != 0){
        this.getFilterMoves('ab',this.asb);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one"></div>');
          });
          $('.threePiecesSg-a.bottom').css('display','none');
        },100);
      }
      if(this.Ab != 0){
        this.getFilterMoves('ab',this.Ab);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one bottom"></div>');
          });
          $('.threePiecesSg-a.bottom').css('display','none');
        },100);
      }
    }
  }
  smallbClick(){
    if(this.startGameVar == true){
      alert('smallbClick');
      this.bsb = this.positionsLast[0].bsb?this.positionsLast[0].bsb:0;
      this.Bb = this.positionsLast[0].Bb?this.positionsLast[0].Bb:0;
      console.log(this.bsb);
      console.log(this.positionsLast);
      if(this.bsb != 0){
        this.getFilterMoves('bb',this.bsb);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one"></div>');
          });
          $('.threePiecesSg-b.bottom').css('display','none');
        },100);
      }
      if(this.Bb != 0){
        this.getFilterMoves('bb',this.Bb);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one bottom"></div>');
          });
          $('.threePiecesSg-b.bottom').css('display','none');
        },100);
      }
    }
  }
  smallcClick(){
    if(this.startGameVar == true){
      alert('smallcClick');
      this.csb = this.positionsLast[0].csb?this.positionsLast[0].csb:0;
      this.Cb = this.positionsLast[0].Cb?this.positionsLast[0].Cb:0;
      console.log(this.csb);
      console.log(this.positionsLast);
      if(this.csb != 0){
        this.getFilterMoves('cb',this.csb);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one"></div>');
          });
          $('.threePiecesSg-c.bottom').css('display','none');
        },100);
      }
      if(this.Cb != 0){
        this.getFilterMoves('cb',this.Cb);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one bottom"></div>');
          });
          $('.threePiecesSg-c.bottom').css('display','none');
        },100);
      }
    }
  }
  smalldClick(){
    if(this.startGameVar == true){
      alert('smalldClick');
      this.dsb = this.positionsLast[0].dsb?this.positionsLast[0].dsb:0;
      this.Db = this.positionsLast[0].Db?this.positionsLast[0].Db:0;
      console.log(this.dsb);
      console.log(this.positionsLast);
      if(this.dsb != 0){
        this.getFilterMoves('db',this.dsb);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one"></div>');
          });
          $('.threePiecesSg-d.bottom').css('display','none');
        },100);
      }
      if(this.Db != 0){
        this.getFilterMoves('db',this.Db);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one bottom"></div>');
          });
          $('.threePiecesSg-d.bottom').css('display','none');
        },100);
      }
    }
  }
  smalleClick(){
    if(this.startGameVar == true){
      alert('smalleClick');
      this.esb = this.positionsLast[0].esb?this.positionsLast[0].esb:0;
      this.Eb = this.positionsLast[0].Eb?this.positionsLast[0].Eb:0;
      console.log(this.esb);
      console.log(this.positionsLast);
      if(this.esb != 0){
        this.getFilterMoves('eb',this.esb);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one"></div>');
          });
          $('.threePiecesSg-e.bottom').css('display','none');
        },100);
      }
      if(this.Eb != 0){
        this.getFilterMoves('eb',this.Eb);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one bottom"></div>');
          });
          $('.threePiecesSg-e.bottom').css('display','none');
        },100);
      }
    }
  }
  smallfClick(){
    if(this.startGameVar == true){
      alert('smallfClick');
      this.fsb = this.positionsLast[0].fsb?this.positionsLast[0].fsb:0;
      this.Fb = this.positionsLast[0].Fb?this.positionsLast[0].Fb:0;
      console.log(this.fsb);
      console.log(this.positionsLast);
      if(this.fsb != 0){
        this.getFilterMoves('fb',this.fsb);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one"></div>');
          });
          $('.threePiecesSg-f.bottom').css('display','none');
        },100);
      }
      if(this.Fb != 0){
        this.getFilterMoves('fb',this.Fb);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one bottom"></div>');
          });
          $('.threePiecesSg-f.bottom').css('display','none');
        },100);
      }
    }
  }

  LlrClick(){
    if(this.startGameVar == true){
      alert('LlrClick');
      this.lsr = this.positionsLast[0].lsr?this.positionsLast[0].lsr:0;
      this.Lr = this.positionsLast[0].Lr?this.positionsLast[0].Lr:0;
      console.log(this.lsr);
      console.log(this.positionsLast);
      if(this.lsr != 0){
        this.getFilterMoves('lr',this.lsr);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one"></div>');
          });
          $('.threePiecesOsg-f.bottom').css('display','none');
        },100);
      }
      if(this.Lr != 0){
        this.getFilterMoves('lr',this.Ft);
        setTimeout(() => {
          var movesClassSet = this.movesFilter[0].classSet?this.movesFilter[0].classSet:[];
          console.log(movesClassSet);
          (movesClassSet as string).split(",").forEach(element => {
            console.log(element);
            $(element).find('.threePieces.three').after('<div class="threePieces one bottom"></div>');
          });
          $('.threePiecesOsg-f.bottom').css('display','none');
        },100);
      }
    }
  }

  startGame(){
    alert('StartGame!');
    this.startGameVar = true;
  }
}
