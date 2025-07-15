<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    private $tasks = [
        ['id' => 1, 'title' => 'Task 1', 'completed' => false],
        ['id' => 2, 'title' => 'Task 2', 'completed' => true],
    ];

    public function index()
    {
        return response()->json($this->tasks);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'completed' => 'boolean',
        ]);

        $task = $request->all();
        $task['id'] = count($this->tasks) + 1;
        $this->tasks[] = $task;

        return response()->json($task, 201);
    }
}
