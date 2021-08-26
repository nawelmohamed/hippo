//package com.yoterra.hippo.mob.controllers;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.google.firebase.messaging.FirebaseMessaging;
//import com.google.firebase.messaging.FirebaseMessagingException;
//import com.google.firebase.messaging.Message;
//import com.google.firebase.messaging.Notification;
//import com.yoterra.hippo.mob.model.response.Response;
//
//@RestController
//@RequestMapping("/_test")
//public class _TestController {
//
//	@SuppressWarnings("unused")
//	private static final Logger log = LoggerFactory.getLogger(_TestController.class);
//
//	@RequestMapping(method = RequestMethod.GET)
//	public Response<?> send(@RequestParam("t") String token) throws FirebaseMessagingException{
//		
//		Message m = Message.builder()
////				.setAndroidConfig(androidConfig)
////				.setToken("bla")
//				.setToken(token)
////						"f3Anx8pWQd6CJt2gCZLXzt:APA91bHRKITHlNjf0Gv6bXtnUCIb3UuBhXFEdQwq70RA35VdDW7FKNGoPqiWuGWT9IOEKqzVCgMDRO1JJFCeH0Qf1Tu2BYrEKhKxPncTkdLNMuZ4Q1QlHM0vSmGsE0xmEHi-PrZGaVAP")
////						"dKFQqcydSNGf3ccKmQCL91:APA91bEAMuI_tK4cg0Wps2k4p1tY1Q--Zhf5zzKZtfuemu2ny7k5RvUPa0v_cdCK2bPodmQvLamzInGALgz0fIjF5AYFU5Jo8D_RXPViaJV7wX11-okw1bUENYHapZOW8uPs8sE5vrSh")
//				.setNotification(Notification.builder()
//						.setTitle("Radi")
//						.setBody("O jea")
//						.build())
//				.build();
//		FirebaseMessaging.getInstance().send(m);
//		return Response.success(null, "test");
//	}
//	
//}
