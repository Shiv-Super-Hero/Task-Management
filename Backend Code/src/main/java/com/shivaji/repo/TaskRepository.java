package com.shivaji.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shivaji.entity.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
	
}
