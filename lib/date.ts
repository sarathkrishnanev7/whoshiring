export function getRelativeDate(postedDate: string): string {
    const today = new Date();
  
    const posted = new Date(postedDate);
  
    // Ignore time and compare only dates
    today.setHours(0, 0, 0, 0);
    posted.setHours(0, 0, 0, 0);
  
    const diffInDays = Math.floor(
      (today.getTime() - posted.getTime()) / (1000 * 60 * 60 * 24)
    );
  
    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays}d`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}w`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)}mo`;
  
    return `${Math.floor(diffInDays / 365)}y`;
  }