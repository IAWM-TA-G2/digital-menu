import Rating from "../ui/Rating";

const ReviewSection = ({ dish, reviews = [] }) => {
  const dishReviews = reviews.filter((review) => review.dishId === dish.id).slice(0, 3);
  const histogram = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: Math.round((dish.reviewCount / 5) * (star / 5))
  }));

  return (
    <section className="space-y-5 rounded-2xl bg-white p-6 shadow-md">
      <h3 className="text-xl font-bold text-primary">Avis clients</h3>
      <Rating value={dish.rating} count={dish.reviewCount} />
      <div className="space-y-2">
        {histogram.map((row) => (
          <div key={row.star} className="flex items-center gap-2">
            <span className="w-6 text-sm text-neutral-600">{row.star}★</span>
            <div className="h-2 flex-1 rounded-full bg-neutral-100">
              <div className="h-2 rounded-full bg-accent" style={{ width: `${(row.count / dish.reviewCount) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {dishReviews.map((review) => (
          <article key={review.id} className="rounded-xl border border-neutral-200 p-3">
            <p className="text-sm font-semibold text-primary">{review.author}</p>
            <p className="text-sm text-neutral-600">{review.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
