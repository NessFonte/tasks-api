import { Controller, Query, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDTO } from './dto/task.dto';

@Controller('api/v1/task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post()
    create(@Body() taskDto: TaskDTO) {
        return this.taskService.create(taskDto);
    }

    @Get()
    findAll() {
        return this.taskService.findAll(); 
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.taskService.findOne(id); 
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() taskDto: TaskDTO) {
        return this.taskService.update(id, taskDto); 
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.taskService.delete(id); 
    }
}
