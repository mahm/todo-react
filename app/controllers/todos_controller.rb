class TodosController < ApplicationController
  def index
    @todos = Todo.all
    respond_to do |format|
      format.html
      format.json { render json: @todos, status: :ok }
    end
  end

  def create
    @todo = Todo.new(todo_params)
    respond_to do |format|
      if @todo.save
        format.json { render json: @todo, status: :created }
      else
        format.json { render json: @todo.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:name)
  end
end