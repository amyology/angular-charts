class VisitsController < ApplicationController

  def index
    visits = Visit.group_by_day(:created_at).count
    @dates = visits.collect { |key| key[0].strftime("%b %d, %Y") }
    @numbers = visits.values
  end

  def create
    Visit.create(
      ip: params[:ip],
      country: params[:country],
      state: params[:state],
      city: params[:city],
      postal_code: params[:postal_code]
      )
  end
end