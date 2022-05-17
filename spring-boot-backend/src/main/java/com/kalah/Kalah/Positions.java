package com.kalah.Kalah;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import javax.persistence.GeneratedValue;
import javax.persistence.Column;

@JsonPropertyOrder({"id","position","lsl","Ll","ast","At","bst","Bt","cst","Ct","dst","Dt","est","Et","fst","Ft","lsr","Lr","asb","Ab","bsb","Bb","csb","Cb","dsb","Db","esb","Eb","fsb","Fb"})
@Entity
public class Positions {
	
	@JsonProperty("id")
	@Id
	@GeneratedValue
	private Long id;
	
	@JsonProperty("position")
	@Column(nullable = false)
	private String position;
	
	@JsonProperty("lsl")
	@Column(nullable = false)
	private Integer lsl;
	
	@JsonProperty("Ll")
	@Column(nullable = false)
	private Integer Ll;
	
	@JsonProperty("ast")
	@Column(nullable = false)
	private Integer ast;
	
	@JsonProperty("At")
	@Column(nullable = false)
	private Integer At;
	
	@JsonProperty("bst")
	@Column(nullable = false)
	private Integer bst;
	
	@JsonProperty("Bt")
	@Column(nullable = false)
	private Integer Bt;
	
	@JsonProperty("cst")
	@Column(nullable = false)
	private Integer cst;
	
	@JsonProperty("Ct")
	@Column(nullable = false)
	private Integer Ct;
	
	@JsonProperty("dst")
	@Column(nullable = false)
	private Integer dst;
	
	@JsonProperty("Dt")
	@Column(nullable = false)
	private Integer Dt;
	
	@JsonProperty("est")
	@Column(nullable = false)
	private Integer est;
	
	@JsonProperty("Et")
	@Column(nullable = false)
	private Integer Et;
	
	@JsonProperty("fst")
	@Column(nullable = false)
	private Integer fst;
	
	@JsonProperty("Ft")
	@Column(nullable = false)
	private Integer Ft;
	
	@JsonProperty("lsr")
	@Column(nullable = false)
	private Integer lsr;
	
	@JsonProperty("Lr")
	@Column(nullable = false)
	private Integer Lr;
	
	@JsonProperty("asb")
	@Column(nullable = false)
	private Integer asb;
	
	@JsonProperty("Ab")
	@Column(nullable = false)
	private Integer Ab;
	
	@JsonProperty("bsb")
	@Column(nullable = false)
	private Integer bsb;
	
	@JsonProperty("Bb")
	@Column(nullable = false)
	private Integer Bb;
	
	@JsonProperty("csb")
	@Column(nullable = false)
	private Integer csb;
	
	@JsonProperty("Cb")
	@Column(nullable = false)
	private Integer Cb;
	
	@JsonProperty("dsb")
	@Column(nullable = false)
	private Integer dsb;
	
	@JsonProperty("Db")
	@Column(nullable = false)
	private Integer Db;
	
	@JsonProperty("esb")
	@Column(nullable = false)
	private Integer esb;
	
	@JsonProperty("Eb")
	@Column(nullable = false)
	private Integer Eb;
	
	@JsonProperty("fsb")
	@Column(nullable = false)
	private Integer fsb;
	
	@JsonProperty("Fb")
	@Column(nullable = false)
	private Integer Fb;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public Integer getLsl() {
		return lsl;
	}

	public void setLsl(Integer lsl) {
		this.lsl = lsl;
	}

	public Integer getLl() {
		return Ll;
	}

	public void setLl(Integer ll) {
		this.Ll = ll;
	}

	public Integer getAst() {
		return ast;
	}

	public void setAst(Integer ast) {
		this.ast = ast;
	}

	public Integer getAt() {
		return At;
	}

	public void setAt(Integer at) {
		this.At = at;
	}

	public Integer getBst() {
		return bst;
	}

	public void setBst(Integer bst) {
		this.bst = bst;
	}

	public Integer getBt() {
		return Bt;
	}

	public void setBt(Integer bt) {
		this.Bt = bt;
	}

	public Integer getCst() {
		return cst;
	}

	public void setCst(Integer cst) {
		this.cst = cst;
	}

	public Integer getCt() {
		return Ct;
	}

	public void setCt(Integer ct) {
		this.Ct = ct;
	}

	public Integer getDst() {
		return dst;
	}

	public void setDst(Integer dst) {
		this.dst = dst;
	}

	public Integer getDt() {
		return Dt;
	}

	public void setDt(Integer dt) {
		this.Dt = dt;
	}

	public Integer getEst() {
		return est;
	}

	public void setEst(Integer est) {
		this.est = est;
	}

	public Integer getEt() {
		return Et;
	}

	public void setEt(Integer et) {
		this.Et = et;
	}

	public Integer getFst() {
		return fst;
	}

	public void setFst(Integer fst) {
		this.fst = fst;
	}

	public Integer getFt() {
		return Ft;
	}

	public void setFt(Integer ft) {
		this.Ft = ft;
	}

	public Integer getLsr() {
		return lsr;
	}

	public void setLsr(Integer lsr) {
		this.lsr = lsr;
	}

	public Integer getLr() {
		return Lr;
	}

	public void setLr(Integer lr) {
		this.Lr = lr;
	}

	public Integer getAsb() {
		return asb;
	}

	public void setAsb(Integer asb) {
		this.asb = asb;
	}

	public Integer getAb() {
		return Ab;
	}

	public void setAb(Integer ab) {
		this.Ab = ab;
	}

	public Integer getBsb() {
		return bsb;
	}

	public void setBsb(Integer bsb) {
		this.bsb = bsb;
	}

	public Integer getBb() {
		return Bb;
	}

	public void setBb(Integer bb) {
		this.Bb = bb;
	}

	public Integer getCsb() {
		return csb;
	}

	public void setCsb(Integer csb) {
		this.csb = csb;
	}

	public Integer getCb() {
		return Cb;
	}

	public void setCb(Integer cb) {
		this.Cb = cb;
	}

	public Integer getDsb() {
		return dsb;
	}

	public void setDsb(Integer dsb) {
		this.dsb = dsb;
	}

	public Integer getDb() {
		return Db;
	}

	public void setDb(Integer db) {
		this.Db = db;
	}

	public Integer getEsb() {
		return esb;
	}

	public void setEsb(Integer esb) {
		this.esb = esb;
	}

	public Integer getEb() {
		return Eb;
	}

	public void setEb(Integer eb) {
		this.Eb = eb;
	}

	public Integer getFsb() {
		return fsb;
	}

	public void setFsb(Integer fsb) {
		this.fsb = fsb;
	}

	public Integer getFb() {
		return Fb;
	}

	public void setFb(Integer fb) {
		this.Fb = fb;
	}

}
