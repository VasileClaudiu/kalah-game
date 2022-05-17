package com.kalah.Kalah;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.data.domain.Sort;

@RestController
@RequestMapping("/api")
public class RestKalahController {

	@Autowired
	private PositionsRepository positionsRepository;
	@Autowired
	private MovesRepository movesRepository;
	
		// get all positions
		@GetMapping("/positions")
		public List<Positions> getAllPositions() {
			return this.positionsRepository.findAll();
		}
		
		// create positions
		@PostMapping( value = "/positions" ,consumes = {"application/json"})
		public Positions createPositions(@RequestBody Positions positions) {
			return this.positionsRepository.save(positions);
		}
		
		// get last positions
		@GetMapping("/positions/last")
		public List<Positions> getLastPositions() {
			//return this.positionsRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
			return this.positionsRepository.findTopByOrderByIdDesc();
		}
		
		// get all moves
		@GetMapping("/moves")
		public List<Moves> getAllMoves() {
			return this.movesRepository.findAll();
		}
		
		//get filter moves
		@PostMapping(value="/moves",consumes = {"application/json"})
		public List<Moves> getFilterMoves(@RequestParam(value="moves") String moves,@RequestParam(value="numberPieces") Integer numberPieces) {
			return this.movesRepository.findByMovesAndNumberPieces(moves,numberPieces);
		}
}
