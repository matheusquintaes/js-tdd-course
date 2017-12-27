import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () =>{

    //smoke test
    describe('Smoke tests',() =>{

      it('should exist the method sum', () =>{
        expect(sum).to.exist;
        expect(sum).to.be.a('function');
      });

      it('should exist the method sub', () =>{
        expect(sub).to.exist;
        expect(sub).to.be.a('function');
      });

      it('should exist the method mult', () =>{
        expect(mult).to.exist;
        expect(mult).to.be.a('function');
      });

      it('should exist the method div', () =>{
        expect(div).to.exist;
        expect(div).to.be.a('function');
      });

    });

    describe('Sum', () =>{
      it('shoud return 4 when ´sum(2,2)´', () =>{
        expect(sum(2,2)).to.be.equal(4);
      });
    });
    describe('sub', () =>{
      it('shoud return 4 when ´sub(6,2)´', () =>{
        expect(sub(6,2)).to.be.equal(4);
      });
    });
    describe('mult', () =>{
      it('shoud return 4 when ´mult(2,2)´', () =>{
        expect(mult(2,2)).to.be.equal(4);
      });
    });
    describe('div', () =>{
      it('shoud return 2 when ´div(4,2)´', () =>{
        expect(div(4,2)).to.be.equal(2);
      });
      it('shoud return ´not possible divibe for 0 when divibe by 0´', () =>{
        expect(div(4,0)).to.be.equal('Not possible divibe for 0');
      });
    });

});
