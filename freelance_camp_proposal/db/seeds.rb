10.times do |proposal|
Proposal.create!(customer: "Customer #{proposal}", portfolio_url: string = 'http://edyuster.com', tools: "Rails, Angular",
estimated_hours: (80 + proposal), hourly_rate: 120, weeks_to_complete: 12, client_email: "edyuster@mail.com")
end
