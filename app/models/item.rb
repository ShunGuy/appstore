class Item < ActiveRecord::Base
  include AlgoliaSearch

  validates :name, :category, :link, :rank, presence: true
  validates :name, :category, length: { minimum: 1, maximum: 255 }
  validates :image, :link, format: { with: URI.regexp, message: 'URL is invalid' }, allow_blank: true
  validates :image, :link, length: { maximum: 2083 }
  validates :rank, numericality: { only_integer: true }

  algoliasearch enqueue: :trigger_sidekiq_worker do
    attribute :name
    attributeForDistinct "category"
    customRanking ['desc(rank)']
  end

  def self.trigger_sidekiq_worker(record, remove)
    IndexItemWorker.perform_async(record.id, remove)
  end
end


class IndexItemWorker
  include Sidekiq::Worker

  def perform(id, remove)
    if remove
      index = Algolia::Index.new("Appstore")
      index.delete_object(id)
    else
      item = Item.find(id)
      item.index!
    end
  end
end
