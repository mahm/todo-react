class TodosController < ApplicationController
  def index
    @todos = (1..10).map{|n| { id: n, name: "Task#{n}", done_at: [nil, Time.now].sample } }
  end
end