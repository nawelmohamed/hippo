//package com.yoterra.hippo.jpa.repositories;
//
//import java.util.List;
//
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//
//import com.yoterra.hippo.jpa.entities.Count;
//import com.yoterra.hippo.jpa.entities.comments.Comment;
//import com.yoterra.hippo.jpa.entities.comments.CommentComment;
//
//public interface CommentCommentRepository extends CommentRepository<Long, Comment<?>, CommentComment>{
//	
//	@Query("SELECT c.comment.id as id, count(c) as cnt FROM CommentComment c WHERE c.comment IN ( :comments ) GROUP BY c.comment")
//	public List<Count<Long>> getPerParentCounts(@Param("comments") java.util.Collection<Comment<?>> comments);
//	
//	public Page<CommentComment> findAllByComment(Comment<?> comment, Pageable pageable);
//	
//	public default Page<CommentComment> getByParent(Comment<?> parent, Pageable pageable){
//		return findAllByComment(parent, pageable);
//	}
//}
//
