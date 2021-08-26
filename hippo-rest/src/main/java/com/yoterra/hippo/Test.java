package com.yoterra.hippo;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.Charset;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;

import com.google.common.collect.Sets;

public class Test {

	public static void main(String[] args) throws IOException {
		
		Random r = new Random(System.currentTimeMillis());
		
		List<String> firstNamesRaw = FileUtils.readLines(new File("/home/mihajlo/yo/hippo/first.names.txt"), Charset.defaultCharset());
		List<String> lastNamesRaw = FileUtils.readLines(new File("/home/mihajlo/yo/hippo/last.names.txt"), Charset.defaultCharset());
		
		System.out.println("Loaded");
		
		List<String> firstNames = processNames(firstNamesRaw);
		
		List<String> lastNames = processNames(lastNamesRaw);
		
		System.out.println("LC - DD - NS: FN: " + firstNames.size() + ", LN:" + lastNames.size());
		
		Set<String> genEmails = Sets.newHashSet();
		
		try (PrintWriter w = new PrintWriter(new BufferedWriter(new FileWriter(new File("/home/mihajlo/yo/hippo/users.csv"))))){
			for (int i = 0 ; i < 10000000 ; i++) {
				String fname = firstNames.get(r.nextInt(firstNames.size()));
				String lname = lastNames.get(r.nextInt(lastNames.size()));
				
				String email = toEmail(fname, lname, 0);
				
				for(int j = 1; genEmails.contains(email) ; j++) {
					System.err.println(email);
					email = toEmail(fname, lname, j);
				}
				
				genEmails.add(email);
				
				String line = fname + "," + lname + "," + email;
				w.println(line);
				
				if(i % 20000 == 0) {
					System.out.println("Generated so far: " + i + ", last line: " + line);
				}
			}
		}
	}

	private static List<String> processNames(List<String> lastNamesRaw) {
		return lastNamesRaw.parallelStream()
				.map(StringUtils::normalizeSpace)
				.map(StringUtils::lowerCase)
				.map(StringUtils::capitalize)
				.distinct()
				.collect(Collectors.toList());
	}

	private static String toEmail(String fname, String lname, int ord) {
		String email = fname + "." + lname + (ord > 0 ? "." + ord : "") + "@gmejl.com";
		return StringUtils.lowerCase(email);
	}
}
