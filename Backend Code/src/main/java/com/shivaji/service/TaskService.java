package com.shivaji.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shivaji.entity.Task;
import com.shivaji.repo.TaskRepository;

@Service
public class TaskService {
	
	@Autowired
	private TaskRepository taskRepository;
	
	public List<Task> getAllTasks(){
		return taskRepository.findAll();
	}
	
	public Optional<Task> getTaskById(Long id){
		return taskRepository.findById(id);
	}
	
	public Task createTask(Task task) {
		return taskRepository.save(task);
	}
	
	public Task updateTask(Long id, Task updatedTask) {
		return taskRepository.findById(id).map(task -> {
	        task.setTitle(updatedTask.getTitle());
	        task.setDescription(updatedTask.getDescription());
	        task.setStatus(updatedTask.getStatus());
	        return task;
	    }).map(taskRepository::save)
	      .orElseThrow(() -> new RuntimeException("Task not found with id: " + id));
	}
	
	public void deleteTask(Long id) {
		taskRepository.deleteById(id);
	}
}
