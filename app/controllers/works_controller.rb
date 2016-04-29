class WorksController < ApplicationController
  before_action :set_work, only: [ :show, :edit, :update, :destroy]
  def index
    @work = Work.all
  end
  def show
    
  end

  def new
    @work = Work.new
  end

  def create
    @work = Work.new(work_params)
    respond_to do |format|
      if @work.save
        format.html{ redirect_to @work, notice: "Successfully Created" }
        format.json{ render :show, status: :created, location: @work }
      else
        format.html{ render :new}
        format.json { render json: @work.errors, status: :unprocessable_entity }
      end
    end
        
  end

  def edit
  end

  def update
    respond_to do |format|
      if @work.update(work_params)
        format.html{ redirect_to @work, notice: "Successfully Updated" }
        format.json{ render :show, status: :created, location: @work }
      else
        format.html{ render :new}
        format.json { render json: @work.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @work.destroy
    respond_to do |format|
      format.html{ respond_to works_path, notice: "Deleted Successfully"}
      format.json{head :no_content}
    end
  end
  private
  def set_work
    @work = Work.find(params[:id])
  end
  def work_params
    params.require(:work).permit(:client, :job_type, :image, :industry, :description)
  end
end
