
const SkeletonLoader = () => {
console.log('Skimmer')
  return (
    <div className="skeleton-container">
      <div className="skeleton-header"></div>
      <div className="skeleton-content">
        <div className="skeleton-thumbnail"></div>
        <div className="skeleton-text"> Sorry ! No Reciepes Found 
          <div className="skeleton-line short"></div>
          <div className="skeleton-line long"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
