package com.yoterra.hippo.mob.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum FeedTypeEnum {
    HOT_DEALS("hot_deals"),
    
    HOT_PRODUCTS("hot_products"),
    
    HOT_CATEGORIES("hot_categories"),
    
    HOT_COLLECTIONS("hot_collections"),
    
    NEW_DEALS("new_deals"),
    
    NEW_PRODUCTS("new_products"),
    
    NEW_COLLECTIONS("new_collections");

    private String value;

    FeedTypeEnum(String value) {
      this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static FeedTypeEnum fromValue(String text) {
      for (FeedTypeEnum b : FeedTypeEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }
  }