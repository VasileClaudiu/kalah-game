package com.kalah.Kalah;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MovesRepository extends JpaRepository<Moves, Long>{
	List<Moves> findByMovesAndNumberPieces(String moves,Integer numberPieces);
}
