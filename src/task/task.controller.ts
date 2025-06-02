import { Controller, Query, Post, Get, Put, Delete, Body, Param, UsePipes, ValidationPipe, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDTO } from './dto/task.dto';

@Controller('api/v1/task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post()
    create(@Body() taskDto: TaskDTO) {
        //throw new HttpException('Error en la Peticion', HttpStatus.BAD_REQUEST);
        //throw new BadRequestException('Error en la Peticion');

        return new Promise((resolve, reject) => {
            setTimeout(() => reject('Something was wrong!'), 15000);
        }) 

        //return this.taskService.create(taskDto);
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
