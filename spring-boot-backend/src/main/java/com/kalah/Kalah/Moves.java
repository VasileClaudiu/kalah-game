package com.kalah.Kalah;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Column;

@Entity
public class Moves {

		@Id
		@GeneratedValue
		private Long id;
		
		@Column(nullable = false)
		private String moves;
		
		@Column(nullable = false)
		private String classSet;

		@Column(nullable = false)
		private Integer numberPieces;

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getMoves() {
			return moves;
		}

		public void setMoves(String moves) {
			this.moves = moves;
		}

		public String getClassSet() {
			return classSet;
		}

		public void setClassSet(String classSet) {
			this.classSet = classSet;
		}

		public Integer getNumberPieces() {
			return numberPieces;
		}

		public void setNumberPieces(Integer numberPieces) {
			this.numberPieces = numberPieces;
		}
		
}
