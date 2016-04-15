class PagesController < ApplicationController
  def home
  	@contact = Contact.new
    @quotation = Quotation.new
  end

  def marketing
    @quotation = Quotation.new
  end

  def company
  end

  def contact
    @contact = Contact.new
    @quotation = Quotation.new
  end
  
  def webdesign
    @quotation = Quotation.new
  end
end
