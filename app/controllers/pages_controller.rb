class PagesController < ApplicationController
  def home
  	@contact = Contact.new
  end

  def marketing
  end

  def company
  end

  def contact
  end
  
  def webdesign
  	@contact = Contact.new
  end
end
