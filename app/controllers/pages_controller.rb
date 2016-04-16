class PagesController < ApplicationController
  def home
  	@contact = Contact.new
    @quotation = Quotation.new
    @blogs = Blog.all
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
end
