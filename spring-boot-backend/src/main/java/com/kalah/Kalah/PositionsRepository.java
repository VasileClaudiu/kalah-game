package com.kalah.Kalah;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PositionsRepository extends JpaRepository<Positions, Long>{
	List<Positions> findTopByOrderByIdDesc();
}
