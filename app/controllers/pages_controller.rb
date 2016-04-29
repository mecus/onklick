class PagesController < ApplicationController
  # before_action :authenticate_admin!,  except: :home
  def home
    @works = Work.all
  	@contact = Contact.new
    @quotation = Quotation.new
    @blogs = Blog.all.order("created_at DESC").paginate(:page => params[:page], :per_page => 8)
  end

  def marketing
    @quotation = Quotation.new
  end

  def company
  end
  def news
    @blogs = Blog.all
  end

  def contact
    @contact = Contact.new
    @quotation = Quotation.new
  end
  
  def webdesign
    @quotation = Quotation.new
  end
  def projects
    @works = Work.all
  end
end
